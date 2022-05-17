import React, {useState, useEffect} from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import sanityClient from '../../helper/client.js';

const Technologies =  () => {
  const [postData, setData] = useState();
  const [postData2, setData2] = useState();

  useEffect(()=>{
    sanityClient.fetch(`*[_type == "frontend"]{
      title,
    }`).then((data)=> setData(data))
    .catch(console.error);

    sanityClient.fetch(`*[_type == "backend"]{
      title,
    }`).then((data)=> setData2(data))
    .catch(console.error);
  
  }, []);
  return(
    <>
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Experience with <br />
          {postData && postData.map((data, idx) => (
          <>
            {data.title} <br />
          </>
      ))}
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            
            {postData2 && postData2.map((data2, idx) => (
          <>
            {data2.title} <br />
          </>
            ))}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <SectionDivider colorAlt />
  </Section>
</>)};

export default Technologies;
