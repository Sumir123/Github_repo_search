import React from "react";
import { AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";
import { Link } from "react-router-dom";

const SearchResult = (props) => {
  const { data } = props;

  const listDatas =
    props.length !== 0 ? (
      data.slice(0, 20).map((datas) => (
        <div className="card" key={datas.id}>
          <div className="card_headings">
            <h1>
              <Link to={`/repo/${datas.full_name}`}>{datas.name}</Link>
            </h1>
            <small>{datas.owner.login}</small>
          </div>
          <div className="card_body">
            <div className="description">
              <p>{datas.description}</p>
            </div>
            <div className="details">
              <p>
                <AiOutlineStar /> {datas.stargazers_count}
              </p>
              <p>
                <AiOutlineEye /> {datas.watchers_count}
              </p>
              <p>
                <TbGitFork /> {datas.forks}
              </p>
            </div>
          </div>
          <div className="card_footer">Updated at: {datas.updated_at}</div>
        </div>
      ))
    ) : (
      <div>No Repos Found</div>
    );
  return (
    <>
      <div className="result_container">{listDatas}</div>
    </>
  );
};

export default SearchResult;
