import React, {useState, useEffect} from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import sanityClient from '../../helper/client.js';
import profil from '../../../eportfolio/schemas/profil';

const Hero = () => {
  const [postData, setData] = useState();

  useEffect(()=>{
    sanityClient.fetch(`*[_type == "profil"]{
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
  <><br />
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Kenny Luo-Li <br />
        </SectionTitle>
        <SectionText>
        <strong>Full-Stack Developer</strong><br />
        <strong>Mobile Developer</strong><br />
        <strong>IoT Developer</strong><br />
        </SectionText>
      </LeftSection>
      

    </Section>
    {postData && postData.map((data, idx) => (
        <>
      <img src={data.mainImage.asset.url}
          alt={data.mainImage.alt}
          />
      </>))}

  </>
)};

export default Hero;