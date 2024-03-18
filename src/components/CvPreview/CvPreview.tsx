/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { IResumeState } from '../../redux/resume/types';
import { Box, CircularProgress } from '@mui/material';
import { Colors } from '../../utils/constants/colors';
import {
  PDFViewer,
  Document,
  Page,
  StyleSheet,
  Font,
  View,
} from '@react-pdf/renderer';
import { Header } from './components/Header/Header';
import OpenSans400 from '../../assets/fonts/OpenSans-Regular.ttf';
import OpenSans500 from '../../assets/fonts/OpenSans-Medium.ttf';
import OpenSans600 from '../../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSans700 from '../../assets/fonts/OpenSans-Bold.ttf';
import { SummarySection } from './components/Summary/Summary';
import { EmploymentHistory } from './components/EmploymentHistory/EmploymentHistory';
import { Education } from './components/Education/Education';
import { Courses } from './components/Courses/Courses';
import { Details } from './components/Details/Details';
import { Links } from './components/Links/Links';
import { Skills } from './components/Skills/Skills';
import { Languages } from './components/Languages/Languages';
import { Projects } from './components/Projects/Projects';
import { base64ToBlob } from '../../utils/helpers/base64ToBlob';
import { deltaToJsx } from '../../utils/helpers/parseDelta';
import { isEmpty } from '../ui/textEditor/textEditor';

interface ICvPreviewProps {
  resume: IResumeState;
}

Font.register({ family: 'Open Sans', fontWeight: 400, src: OpenSans400 });
Font.register({ family: 'Open Sans', fontWeight: 500, src: OpenSans500 });
Font.register({ family: 'Open Sans', fontWeight: 600, src: OpenSans600 });
Font.register({ family: 'Open Sans', fontWeight: 700, src: OpenSans700 });

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    backgroundColor: Colors.white,
    fontFamily: 'Open Sans',
  },
  sectionsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    width: '100%',
    paddingRight: 25,
  },
  right: { width: '45%' },
});

export const CvPreview: React.FC<ICvPreviewProps> = ({ resume }) => {
  const {
    details,
    summary,
    summaryDelta,
    workExpeprience,
    projects,
    education,
    links,
    skills,
    languages,
    courses,
  } = resume;

  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    setIsChanged(true);
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(undefined);
    }

    const newTimer = setTimeout(() => {
      setIsChanged(false);
    }, 600);
    setTimerId(newTimer);
  }, [resume]);

  useEffect(() => {
    if (details.photo) {
      setPhotoUrl(URL.createObjectURL(base64ToBlob(details.photo)));
    } else {
      setPhotoUrl(null);
    }
  }, [details.photo]);

  const parsedSummary = deltaToJsx(summaryDelta);

  return (
    <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          background: Colors.grayBgPdf,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isChanged && <CircularProgress />}
      </Box>
      <PDFViewer
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: isChanged ? 0 : 1,
        }}
      >
        <Document title={resume.cvName}>
          <Page style={styles.page}>
            <Header details={details} photoUrl={photoUrl} />
            <View style={styles.sectionsContainer}>
              <View style={styles.left}>
                {!isEmpty(summary) && (
                  <SummarySection summary={parsedSummary} />
                )}
                {!!workExpeprience.length && (
                  <EmploymentHistory workExpeprience={workExpeprience} />
                )}
                {!!projects.length && <Projects projects={projects} />}
                {!!education.length && <Education education={education} />}
                {!!courses.length && <Courses courses={courses} />}
              </View>
              <View style={styles.right}>
                <Details details={details} />
                {!!links.length && <Links links={links} />}
                {!!skills.length && <Skills skills={skills} />}
                {!!languages.length && <Languages languages={languages} />}
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Box>
  );
};
