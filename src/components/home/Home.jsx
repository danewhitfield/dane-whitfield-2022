import Style from "./Home.module.scss";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import Model from "./Model";

const Home = () => {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
      marginTop={"80px"}
    >
      {/* <Box
				className={`${classNames(Style.avatar, Style.shadowed)}`}
				alt={'image of developer'}
				style={{ background: info.gradient }}
				component={'img'}
				src={me}
				width={{ xs: '35vh', md: '40vh' }}
				height={{ xs: '35vh', md: '40vh' }}
				borderRadius={'50%'}
				p={'0.50rem'}
				mb={{ xs: '1rem', sm: 0 }}
				mr={{ xs: 0, md: '2rem' }}
			/> */}
      <Model />
      {/* <DisplayIsoRoom /> */}
      <Box>
        <h1>
          Hi, I'm{" "}
          <span
            style={{
              backgroundImage: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.firstName}
          </span>
          <span className={Style.hand}>🤙</span>
        </h1>
        <h2>{info.position}.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
      </Box>
      <Box
        className={Style.links}
        display={"flex"}
        flexDirection={"column"}
        style={{ transform: "translateX(60px)" }}
        gap={"1.5rem"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={{ xs: "2rem", md: "2.5rem" }}
      >
        {info.socials.map((social, index) => (
          <SocialIcon
            key={index}
            link={social.link}
            icon={social.icon}
            label={social.label}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
