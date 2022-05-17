import React, {useState, useEffect} from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import sanityClient from '../../helper/client.js';



const Projects = () => {
  const [postData, setData] = useState();

  useEffect(()=>{
    sanityClient.fetch(`*[_type == "post"]{
      title,
      categories,
      body,
      url,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
  
    }`).then((data)=> setData(data))
    .catch(console.error);
  }, []);
  return(
    <>
    
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
      
      {postData && postData.map((data, idx) => (
      <>
            <BlogCard key={idx}>
              {console.log(data)}
              
            <img src={data.mainImage.asset.url}
          alt={data.mainImage.alt}
          />
              <TitleContent>
                <HeaderThree title>{data.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{data.body[0].children[0].text}</CardInfo>
              <div>
                <br />
                <TitleContent>Stack</TitleContent>
                <TagList>
                {data.categories}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={data.url}>Take a look here!</ExternalLinks>
                {/* <ExternalLinks href={p.source}>Source</ExternalLinks> */}
              </UtilityList>
            </BlogCard>
            </>))}
      </GridContainer>
    </Section>
  
  </>)};

export default Projects;