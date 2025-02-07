import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import AboutMe from "../components/AboutMe";
import BackToTop from "../components/BackToTop";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
// Config
import { filteredProjects, moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Portfolio`);
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} />
      <main>
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Skills />
        <Projects filteredProjects={filteredProjects} />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
