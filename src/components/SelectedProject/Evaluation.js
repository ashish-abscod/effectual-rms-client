import React, { useState, useContext, useEffect } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { UserContext } from "../contexts/UserContext";
import { BsQuestionDiamondFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/inject-style";

export default function Evaluation() {
  const { user } = useContext(UserContext);
  const { projectId, setProjectId } = useContext(ProjectContext);
  const [isHovering, setIsHovering] = useState(false);
  const [isClaimHovering, setIsClaimHovering] = useState(false);
  const [isHistoryHovering, setIsHistoryHovering] = useState(false);
  const [isDataHovering, setIsDataHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!projectId) setProjectId(window?.localStorage?.getItem('projectId'));
  }, [projectId,setProjectId])

  const claimMouseOver = () => {
    setIsClaimHovering(true);
  };
  const claimMouseOut = () => {
    setIsClaimHovering(false);
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const dataMouseOver = () => {
    setIsDataHovering(true);
  };
  const dataMouseOut = () => {
    setIsDataHovering(false);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const historyMouseOver = () => {
    setIsHistoryHovering(true);
  };
  const historyMouseOut = () => {
    setIsHistoryHovering(false);
  };

  const [evaluationData, setevaluationData] = useState({
    projectId: projectId,
    modification: "",
    searchscore: 0,
    claimscore: 0,
    historyscore: 0,
    datacoverage: 0,
    sum: "",
    category: "",
    comment: "",
    appSerachResult: "",
    editedby: ""
  });


  const getEvaluationData = async () => {

    try {
      const res = await axios.get(
        `http://localhost:8080/evaluation/getById/${projectId}`
      );
      const { modification, appSerachResult, claimscore, comment, datacoverage, historyscore, searchscore, editedby,category} = { ...res?.data?.result };
      if (res?.data?.result) {
        setevaluationData({
          ...evaluationData,
          modification: modification,
          searchscore: searchscore,
          claimscore: claimscore,
          historyscore: historyscore,
          datacoverage: datacoverage,
          category: category,
          comment: comment,
          appSerachResult: appSerachResult,
          editedby: editedby,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvaluationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  const submitData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8080/evaluation/${projectId}`,
        {
          ...evaluationData, editedby: user?.userData?.name
        }
      );
      if (res?.data?.status === "success") toast.success(res?.data?.msg);
      else toast.error(res?.data?.msg);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }

  };
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 pt-2">
        <div className="col">
          <div className="input-field">
            <input
              type="date"
              disabled
              className="form-control"
              value={evaluationData?.modification}
              readOnly
            />
            <label>Modified Date:</label>
            <span className="d-none">Error : Field Required</span>
          </div>
        </div>
        <div className="col">
          <div className="input-field">
            <input
              type="text"
              className="form-control"
              value={evaluationData?.editedby}
              disabled
              readOnly
            />
            <label>Last Edited By:</label>
            <span className="d-none">Error : Field Required</span>
          </div>
        </div>
        <div className="col">
          <div className="input-field">
            <select
              className="form-select"
              value={evaluationData?.category}
              onChange={(e) => {
                setevaluationData({
                  ...evaluationData,
                  category: e.target.value,
                });
              }}
            >
              <option value="X">X-Cateogry</option>
              <option value="Y">Y-Cateogry</option>
              <option value="A">A-Cateogry</option>
            </select>
            <label>X/Y/A:</label>
            <span className="d-none">Error : Field Required</span>
          </div>
        </div>
        <div className="col">
          <div className="input-field">
            <input
              type="text"
              className="form-control"
              value={evaluationData?.appSerachResult}
              required
              onChange={(e) => {
                setevaluationData({
                  ...evaluationData,
                  appSerachResult: e.target.value,
                });
              }}
            />
            <label
              className="text-truncate d-inline-block"
              style={{ width: "65%" }}
            >
              Application of Search Result:
            </label>
            <span className="d-none">Error : Field Required</span>
          </div>
        </div>
      </div>

      <div className="row justify-content-evenly mt-4">
        <div className="col-lg-4 col-md-6">
          <span className="fw-bold text-secondary" style={{ fontSize: "12px" }}>
            Score Range Refrences : X (55-65) | Y(45-55) | Z (0-25){" "}
          </span>
          <div
            className="input-field mt-3"
            style={{ display: "flex", position: "relative" }}
          >
            <input
              type="text"
              className="form-control"
              required
              value={evaluationData?.searchscore}
              onChange={(e) => {
                setevaluationData({
                  ...evaluationData,
                  searchscore: e.target.value,
                });
              }}
            />
            <label>Search Result Score:</label>
            <span className="d-none">Error : Field Required</span>
            <BsQuestionDiamondFill
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{
                position: "absolute",
                right: "-6%",
                top: "49%",
                cursor: "pointer",
              }}
            />

            {isHovering && (
              <div
                style={{
                  background: "black",
                  color: "white",
                  padding: "8px 8px",
                  fontSize: "12px",
                  borderRadius: "10px",
                  boxShadow: "white",
                  height: "110px",
                  position: "absolute",
                  right: "-325px",
                }}
              >
                1.X-document,55-65,(Quality of X-
                <br />
                document,scope of influeence, Accurancy and so on);
                <br /> 2. Y-document,45-55,(Quantity of Y -<br /> Scope of
                influeence, Accurancy ans so on ):
                <br /> 3. A-document,0-25{" "}
              </div>
            )}
          </div>

          <div className="input-field">
            <input
              type="text"
              className="form-control"
              required
              value={evaluationData?.claimscore}
              onChange={(e) => {
                setevaluationData({
                  ...evaluationData,
                  claimscore: e.target.value,
                });
              }}
            />
            <label>Claim Chart Score:</label>
            <span className="d-none">Error : Field Required</span>
            <BsQuestionDiamondFill
              onMouseOver={claimMouseOver}
              onMouseOut={claimMouseOut}
              style={{
                position: "absolute",
                right: "-6%",
                top: "49%",
                cursor: "pointer",
              }}
            />

            {isClaimHovering && (
              <div
                style={{
                  background: "black",
                  color: "white",
                  padding: "10px 9px",
                  fontSize: "12px",
                  borderRadius: "10px",
                  boxShadow: "white",
                  height: "242px",
                  position: "absolute",
                  right: "-250px",
                  top: "-50px",
                }}
              >
                1. Accurancy and detail of the claim
                <br />
                feature partition.
                <br />
                2. Sentences and paragraphs of <br />
                refrences document are claer and <br />
                accuate. <br />
                3. Using color reflects the
                <br /> corresponding relationships. <br />
                4. Details analysis and accurancy of <br />
                5.(Sum score of above 1-4 is 10. If you
                <br />
                have outstanding performance, you
                <br />
                can get extra score 1-5. For
                <br />
                eg: increaing readability by
                <br />
                figure. )
              </div>
            )}
          </div>
          <div className="input-field">
            <input
              type="text"
              className="form-control"
              required
              value={evaluationData?.historyscore}
              onChange={(e) => {
                setevaluationData({
                  ...evaluationData,
                  historyscore: e.target.value,
                });
              }}
            />
            <label>Search History Score:</label>
            <span className="d-none">Error : Field Required</span>
            <BsQuestionDiamondFill
              onMouseOver={historyMouseOver}
              onMouseOut={historyMouseOut}
              style={{
                position: "absolute",
                right: "-6%",
                top: "49%",
                cursor: "pointer",
              }}
            />
            {isHistoryHovering && (
              <div
                style={{
                  background: "black",
                  color: "white",
                  padding: "8px 8px",
                  fontSize: "12px",
                  borderRadius: "10px",
                  boxShadow: "white",
                  height: "180px",
                  position: "absolute",
                  right: "-253px",
                  top: "-50px",
                }}
              >
                1. Accurancy and comphrehensive of
                <br />
                keyword and classification.
                <br />
                2. Accurancy level and comphrehensive
                <br />
                of search strategy.
                <br /> 5.(Sum score of above 1-2 is 6. If you
                <br />
                have outstanding performance, you
                <br />
                can get extra score 1-4. For
                <br />
                eg: using special search
                <br />
                method. )
              </div>
            )}
          </div>
          <div className="input-field">
            <input
              type="text"
              className="form-control"
              required
              value={evaluationData?.datacoverage}
              onChange={(e) => {
                setevaluationData({
                  ...evaluationData,
                  datacoverage: e.target.value,
                });
              }}
            />
            <label>Data Coverage:</label>
            <span className="d-none">Error : Field Required</span>
            <BsQuestionDiamondFill
              onMouseOver={dataMouseOver}
              onMouseOut={dataMouseOut}
              style={{
                position: "absolute",
                right: "-6%",
                top: "49%",
                cursor: "pointer",
              }}
            />
            {isDataHovering && (
              <div
                style={{
                  background: "black",
                  color: "white",
                  padding: "8px 8px",
                  fontSize: "12px",
                  borderRadius: "10px",
                  boxShadow: "white",
                  height: "153px",
                  position: "absolute",
                  right: "-260px",
                  top: "-37px",
                }}
              >
                1. Search range covers major
                <br />
                countries and regions of the database.
                <br />
                2.Non patent search, for example
                <br />
                journals and standards. <br />
                3.(Sum score of above 1-2 is 6,If you <br />
                have outstanding performance.You
                <br />
                can get extra score 1-4.for
                <br />
                example,using japanese,Korean,Chinese)
              </div>
            )}
          </div>

          <div className="input-field">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setevaluationData({
                  ...evaluationData,
                  sum: e.target.value,
                });
              }}
              value={
                (evaluationData.sum =
                  parseInt(evaluationData.claimscore) +
                  parseInt(evaluationData.datacoverage) +
                  parseInt(evaluationData.searchscore) +
                  parseInt(evaluationData.historyscore))
              }
            ></input>

            <label>Total Sum:</label>
            <span className="d-none">Error : Field Required</span>
          </div>
        </div>
        <div className="col-md-6">
          <textarea
            rows="11"
            className="w-100 border border-primary rounded p-3"
            placeholder="Write your comment here..."
            value={evaluationData?.comment}
            onChange={(e) => {
              setevaluationData({
                ...evaluationData,
                comment: e.target.value,
              });
            }}
          ></textarea>
          <button
            type="button"
            disabled={isLoading ? true : false}
            className="btn btn-success w-100 rounded-pill mt-3"
            onClick={() => submitData()}
          >
            Evaluate

          </button>
        </div>
      </div>
    </div>
  );
}
