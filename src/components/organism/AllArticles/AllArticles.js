import "./AllArticles.css";
import { useEffect } from "react";
import Axios from "axios";
import { useNavigate  } from "react-router-dom";
import ArrOw from '../../../assets/assets/arrow.svg';
import Image from '../../atomic/Image/Image'

function AllArticles({listOfArticles, setListOfArticles, setClickedArticleId}) {
  let navigate  = useNavigate();

  const handleClick = async (id) => {
    await setClickedArticleId(id)
    navigate(`/${id}`);
  }

  useEffect(() => {
    Axios.get("https://the-real-estates.cdn.prismic.io/api/v2/documents/search?ref=YSjlphIAACQAVr_c")
          .then((response) => {
            setListOfArticles(response.data.results);
          })
          .catch(function (error) {
            console.log(error.toJSON());
          });
  }, [setListOfArticles]);

  return (
    <div>
      <div className="all-articles">
        <div className="header-articles">
          <h1>Herausragendes Resultat im Geschaftsjahr 2020</h1>
          <img  className="arrow-down" src={ArrOw} alt="ArrOw" />
        </div>
        <div className="articles-container">
          <div className="articles-container-left">
            {listOfArticles.filter((article, index) => index % 2 === 0).map((article) => {
              return (
                <div
                  key={article.id}
                  className="article-container-left"
                  onClick={() => handleClick(article.id)}
                >
                  <Image src={article.data.image.url}  />
                  <h5>
                      Subtitle
                  </h5>
                  <h4>
                  {article.data.title[0].text} 
                  </h4>
                </div> 
              );
            })}
          </div>
          <div className="articles-container-right">
            {listOfArticles.filter((article, index) => index % 2 !== 0).map((article) => {
              return (
                <div
                  key={article.id}
                  className="article-container-right"
                  onClick={() => handleClick(article.id)}
                >
                  <Image src={article.data.image.url}  />
                  <h5>
                      Subtitle
                  </h5>
                  <h4>
                  {article.data.title[0].text} 
                  </h4>
                </div> 
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllArticles;
