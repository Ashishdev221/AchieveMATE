import React from "react";
import "./ExploreCourse.css";
import LeaderboardCard from "./LeaderboardCard";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";

function ExploreCourse({ userData, leaderBoardData }) {
  return (
    <div className="achievers">
      <h3 className="achievers_heading">Explore Free Courses</h3>
      <div className="explore_coin">
        {/* <h4 className="explore_coin_heading">Available Course Coins</h4>
        <div className="coins">150</div>
        <p className="explore_coin_para">Earn more coins</p> */}
        <div></div>
        <div className="flex" style={{ textAlign: "center", color: "white" }}>
          <div
            className="flex-container"
            style={{ justifyContent: "space-between" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-graph-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 0h1v15h15v1H0V0Zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z"
              />
            </svg>
            <a
              target="_blank"
              style={{ color: "white" }}
              href="https://www.coursera.org/courses?query=free%20courses%20data%20science&utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA__branded_FTCOF_courseraplus_arte_PMax&utm_content=Degree&campaignid=19607944793&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0w6-SneED89iD7hbAjPN5u3BHjq_vNiy-lsMdlZ6cotN0bs9icj-WkaAvKeEALw_wcB"
            >
              <p>Data Science</p>
            </a>
          </div>
          <div
            className="flex-container"
            style={{ justifyContent: "space-between" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-android2"
              viewBox="0 0 16 16"
            >
              <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" />
            </svg>
            <a
              target="_blank"
              style={{ color: "white" }}
              href="https://www.udemy.com/course/learn-android-application-development-y/?utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA_Catchall_la.EN_cc.INDIA&utm_content=deal4584&utm_term=_._ag_82569850245_._ad_533220805577_._kw__._de_c_._dm__._pl__._ti_aud-1738475842996:dsa-406594358574_._li_1007808_._pd__._&matchtype=&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0zGWYSG-Df2XzhDjz7FP0tvifI4D8QtezDBYZu6AH1tDiU8bWDtKRIaAnXvEALw_wcB"
            >
              <p>Android Development</p>
            </a>
          </div>

          <div
            className="flex-container"
            style={{ justifyContent: "space-between" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pc-display-horizontal"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
            </svg>
            <a
              target="_blank"
              style={{ color: "white" }}
              href="https://www.freecodecamp.org/learn/front-end-development-libraries/"
            >
              <p>Frontend Development</p>
            </a>
          </div>

          <div
            className="flex-container"
            style={{ justifyContent: "space-between" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-database-lock"
              viewBox="0 0 16 16"
            >
              <path d="M13 5.698a4.92 4.92 0 0 1-.904.525C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 5.698V7c0 .374.356.875 1.318 1.313C5.234 8.729 6.536 9 8 9c.666 0 1.298-.056 1.876-.156-.43.31-.804.693-1.102 1.132A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 8.698V10c0 .374.356.875 1.318 1.313C5.234 11.729 6.536 12 8 12h.027a4.548 4.548 0 0 0-.017.8A1.9 1.9 0 0 0 8 13c-1.573 0-3.022-.289-4.096-.777A4.916 4.916 0 0 1 3 11.698V13c0 .374.356.875 1.318 1.313C5.234 14.729 6.536 15 8 15c0 .363.097.704.266.997C8.178 16 8.089 16 8 16c-1.573 0-3.022-.289-4.096-.777C2.875 14.755 2 14.007 2 13V4c0-1.007.875-1.755 1.904-2.223C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4v4.256a4.493 4.493 0 0 0-1.753-.249C12.787 7.654 13 7.289 13 7V5.698Zm-8.682-3.01C3.356 3.124 3 3.625 3 4c0 .374.356.875 1.318 1.313C5.234 5.729 6.536 6 8 6s2.766-.27 3.682-.687C12.644 4.875 13 4.373 13 4c0-.374-.356-.875-1.318-1.313C10.766 2.271 9.464 2 8 2s-2.766.27-3.682.687Z" />
              <path d="M9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
            </svg>
            <a
              target="_blank"
              style={{ color: "white" }}
              href="https://www.freecodecamp.org/learn/back-end-development-and-apis/"
            >
              <p>Backend Development</p>
            </a>
          </div>
          <div
            className="flex-container"
            style={{ justifyContent: "space-between" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-diagram-3-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"
              />
            </svg>
            <a
              target="_blank"
              style={{ color: "white" }}
              href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
            >
              <p>Data Structures And Algorithm</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        {leaderBoardData.map((item, index) => {
          if (index <= 4 || item.user.name === userData.name) {
            console.log(item, userData.name);
            return (
              <LeaderboardCard
                count={item.count}
                name={item.user.name}
                image={item.user.img}
                badgeImage={
                  index === 0
                    ? "1-1@2x.png"
                    : index === 1
                    ? "2-24@2x.png"
                    : "3-51@2x.png"
                }
                index={index}
                className={
                  item.user.name !== userData.name
                    ? "leaderboardCard container flex-container"
                    : "leaderboardCard container flex-container current_user"
                }
              />
            );
          }
        })}
      </div>
      {/* <Button label="Show all" className="button achievers_btn"/> */}
    </div>
  );
}

export default ExploreCourse;
