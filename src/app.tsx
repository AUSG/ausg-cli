import React, { useEffect, useState } from 'react';
import { Box, Newline, Text } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import peopleData from './peopel.json' assert { type: 'json' };

type Props = {
  name: string | undefined;
  member: string | undefined;
};

type Person = {
  year: string;
  name_ko: string;
  name_en: string;
  photo: string;
  short_bio: string;
  github_username?: string;
  linkedin_username?: string;
  homepage_url?: string;
}[];

export default function App({ name, member }: Props) {
  const [data, setData] = useState<Person | undefined>(undefined);

  useEffect(() => setData(peopleData.people));
  return (
    <>
      <Gradient name="retro">
        <BigText text="AUSG" align="center" />
      </Gradient>
      {member ? (
        <Box borderStyle="single" padding={2} flexDirection="column">
          <Box>
            <Box width="5%">
              <Text>기수</Text>
            </Box>
            <Box width="5%">
              <Text>이름</Text>
            </Box>
            <Box width="70%">
              <Text>자기소개</Text>
            </Box>
            <Box width="20%">
              <Text>Github_Username</Text>
            </Box>
          </Box>
          <Newline />
          {data
            ?.filter(({ year }) => year === member)
            .map(({ year, name_ko, short_bio, github_username }) => (
              <Box key={short_bio} borderStyle="single">
                <Box width="5%">
                  <Text>{year}</Text>
                </Box>
                <Box width="5%">
                  <Text>{name_ko}</Text>
                </Box>
                <Box width="70%">
                  <Text>{short_bio}</Text>
                </Box>
                <Box width="20%">
                  <Text>{github_username}</Text>
                </Box>
              </Box>
            ))}
        </Box>
      ) : (
        <Box borderStyle="single" padding={2} flexDirection="column" alignItems="center">
          <Text color="white" bold>
            AUSG CLI에 오신 것을 환영합니다{name ? `,${name}님!` : null}
          </Text>
          <Box marginBottom={1} flexDirection={'column'}>
            <Text color={'grey'}>대학생 개발자를 위한 클라우드 커뮤니티</Text>
          </Box>
          <Box flexDirection="column" marginBottom={1} alignItems="center">
            <Text>
              <Text backgroundColor={'whiteBright'} color={'black'} underline={false}>
                GitHub
              </Text>
              <Text underline={true}> https://github.com/AUSG</Text>
            </Text>
            <Text>
              <Text backgroundColor={'whiteBright'} color={'black'} underline={false}>
                Homepage
              </Text>
              <Text underline={true}>https://ausg.me</Text>
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
}
