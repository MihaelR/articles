import React from 'react';
import "./Article.css";
import Image from '../../atomic/Image/Image'

function Article({ listOfArticles, clickedArticleId }) {
  const filteredArticle = listOfArticles.filter(article => article.id === clickedArticleId);

  // Format case article. rich-text to richText.
  const formatCaseArticleSubtitle = Object.fromEntries(Object.entries(filteredArticle[0].data).filter(([key]) => key.includes('sub-title')));
  formatCaseArticleSubtitle['subTitle'] = formatCaseArticleSubtitle['sub-title'];
  delete formatCaseArticleSubtitle['sub-title'];

  // Format case article. rich-text to richText.
  const formatCaseArticleText = Object.fromEntries(Object.entries(filteredArticle[0].data).filter(([key]) => key.includes('rich-text')));

  formatCaseArticleText['richText'] = formatCaseArticleText['rich-text'];
  delete formatCaseArticleText['rich-text'];

  console.log('xxx',formatCaseArticleSubtitle.subTitle[0].text) 

  return (
    <div className="article-container">
      <div className="article-content">
        <h4> {formatCaseArticleSubtitle.subTitle[0].text} </h4>
        <h2> {filteredArticle[0].data.title[0].text} </h2>
        <div className="image-field">
          <div className="article-image" >
            <Image src={filteredArticle[0].data.image.url}  />
          </div>
        </div>
        <div className="texts-container">
            {formatCaseArticleText.richText.map((article) => {
              return (
                <div className='text'>
                  <h5>
                      title
                  </h5>
                  <h4>
                  {article.text} 
                  </h4>
                </div> 
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Article;
