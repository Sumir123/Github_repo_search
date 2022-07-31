import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { TbGitFork } from "react-icons/tb";

import { useParams, useNavigate, Link } from "react-router-dom";
const RepoDetails = () => {
  const navigate = useNavigate();
  const prams = useParams();
  const [repoDetails, setRepoDetails] = useState([]);

  var username = prams.username;
  var reponame = prams.reponame;

  useEffect(() => {
    const getRepoDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${username}/${reponame}`
        );
        setRepoDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getRepoDetails();
  }, []);

  const goback = () => {
    navigate(-1);
  };

  const details =
    repoDetails.length !== 0 ? (
      <div className="card" key={repoDetails.id}>
        <div className="card_headings">
          <h1>
            <a href={repoDetails.owner.html_url} target="_blank">
              {repoDetails.owner.login}
            </a>
            &nbsp; - &nbsp;
            <a href={repoDetails.html_url} target="_blank">
              {repoDetails.name}
            </a>
          </h1>
        </div>
        <div className="card_body">
          <div className="description">
            <p className="bb-1">{repoDetails.description}</p>
            <p> Number of open issues: {repoDetails.open_issues_count} </p>
            <p>Defaultbranch: {repoDetails.default_branch}</p>
          </div>
          <div className="details">
            <p>
              <AiOutlineStar /> {repoDetails.stargazers_count}
            </p>
            <p>
              <AiOutlineEye /> {repoDetails.watchers_count}
            </p>
            <p>
              <TbGitFork /> {repoDetails.forks}
            </p>
          </div>
        </div>
        <div className="card_footer">
          <p className="start"> Updated at: {repoDetails.updated_at}</p>
          <p className="end">Posted at: {repoDetails.created_at} </p>
        </div>
      </div>
    ) : (
      <div></div>
    );
  return (
    <>
      <div className="result_container">
        <h1>Repo Details</h1>
        <div className="back_button">
          <button onClick={goback}>
            <IoIosArrowBack />
          </button>
        </div>
        {details}
      </div>
    </>
  );
};

export default RepoDetails;
