import React from 'react'
import BlogCard from '../molecules/BlogCard';
import useParseSliceData from '@/hooks/useslice';
// rec  recommended
const RecommendedArtical = ({data}) => {
  const {heading , subheading , btn_title , card , img , videolink} = data;
  const cardData = useParseSliceData(card);
  return (
<section className="blog_section section_space_lg">
  <div className="container">
    <div className="section_heading">
      <h2 className="section_heading_text mb-0">{heading}</h2>
    </div>
    <div className="row">
      {cardData && cardData.map((item , index)=>
      <div className="col-lg-4" key={index}>
        <BlogCard data={item}/>
      </div> )}
    </div>
  </div>
</section>

  )
}

export default RecommendedArtical 