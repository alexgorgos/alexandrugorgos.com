import * as React from "react";
import { Layout } from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Link, Typography } from "@mui/material";

export const DevImage = () => {
  return (
    <StaticImage
      src="../images/dev.jpg"
      alt="Alexandru Gorgos, software developer"
      loading="eager"
      formats={["webp"]}
      quality={90}
      layout="fullWidth"
      fit="cover"
      style={{ height: "100%" }}
      imgClassName="dev"
    />
  );
};

export const PhotoImage = () => {
  return (
    <StaticImage
      src="../images/photo.jpg"
      alt="Alexandru Gorgos, photographer"
      loading="eager"
      formats={["webp"]}
      quality={90}
      layout="fullWidth"
      fit="cover"
      style={{ height: "100%" }}
      imgClassName="photo"
    />
  );
};

const Homepage = () => {
  const [hovered, setHovered] = React.useState("");
  const [touchPos, setTouchPos] = React.useState(null);
  const [active, setActive] = React.useState("");

  const isMobile = React.useRef(
    (() => {
      if (typeof window === "undefined") {
        return;
      } else {
        const toMatch = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i,
        ];

        return toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem);
        });
      }
    })()
  );

  const handleHover = (e) => {
    if (!isMobile.current) {
      const getClass = e.target.className;
      /dev/.test(getClass) && setHovered("dev");
      /photo/.test(getClass) && setHovered("photo");
      /header/.test(getClass) && setHovered(" ");
    }
  };

  React.useEffect(() => {
    if (isMobile.current && !active) {
      setActive("photo");
    }
  });

  const handleSwipeStart = (e) => {
    if (isMobile.current) {
      const touchDown = e.touches[0].clientX;
      setTouchPos(touchDown);
    }
  };

  const handleSwipeMove = (e) => {
    if (isMobile.current) {
      const getClass = e.target.className;
      const touchDown = touchPos;
      if (touchDown === null) {
        return null;
      }

      const currentTouch = e.touches[0].clientX;
      const diff = touchDown - currentTouch;

      if (diff > 5) {
        /photo/.test(getClass) && setActive("dev");
      }

      if (diff < -5) {
        /dev/.test(getClass) && setActive("photo");
      }

      setTouchPos(null);
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          position: { xs: "static", md: "absolute" },
          top: { xs: 0, md: "50%" },
          left: { xs: 0, md: "50%" },
          transform: { xs: "none", md: "translate(-50%, -50%)" },
          margin: "0 auto",
          backgroundColor: "#000",
          py: 3,
          px: 5,
          zIndex: "1201",
          whiteSpace: "nowrap",
          width: { xs: "100%", md: "auto" },
          height: "fit-content",
        }}
        className="header"
        onMouseOver={(e) => handleHover(e)}
      >
        <Typography
          component="h1"
          className="header"
          sx={{
            typography: {
              xs: "h3",
              md: "h1",
            },
          }}
        >
          Alexandru Gorgos
        </Typography>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          backgroundColor: "black",
        }}
        onTouchStart={handleSwipeStart}
        onTouchMove={handleSwipeMove}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            borderRight: { md: "1px solid white" },
            overflow: "hidden",
            height: "100%",
            transition: { xs: "transform 1s", md: "none" },
          }}
          className={
            "photo " +
            (isMobile.current && (active === "photo" ? "active" : "inactive"))
          }
        >
          <Link
            href="https://photo.alexandrugorgos.com"
            className={hovered === "photo" ? "hovered" : ""}
            onMouseOver={(e) => handleHover(e)}
          >
            <PhotoImage />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: {
                  xs: "translate(100%, -150%)",
                  md: "translate(100%, 50%)",
                },
                backgroundColor: "#000",
                p: 5,
                my: 5,
                color: "white",
                transition: "transform 1s",
              }}
              className="photo"
              id="photo-title"
            >
              <Typography
                fontFamily={"Poppins, sans-serif"}
                className="photo"
                variant="body2"
              >
                The photographer
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: {
                  xs: "translate(100%, 0)",
                  md: "translate(100%, 150%)",
                },
                backgroundColor: "#000",
                p: 5,
                my: 5,
                color: "white",
                whiteSpace: "nowrap",
                textAlign: "right",
                overflow: "hidden",
                transition: "transform 1s",
              }}
              className="photo"
              id="photo-info"
            >
              <Typography
                fontFamily={"Poppins, sans-serif"}
                className="photo"
                variant="body2"
              >
                Candid photography lover
              </Typography>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                className="photo"
                variant="body2"
              >
                Passionate world observer with a camera
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            borderLeft: { md: "1px solid white" },
            overflow: "hidden",
            height: "100%",
            transition: {
              xs: "transform 1s",
              md: "none",
            },
          }}
          className={
            "dev " +
            (isMobile.current && (active === "dev" ? "active" : "inactive"))
          }
        >
          <Link
            href="https://www.linkedin.com/in/alexandru-gorgos/"
            className={hovered === "dev" ? "hovered" : ""}
            onMouseOver={(e) => handleHover(e)}
          >
            <DevImage />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: {
                  xs: "translate(-100%, -150%)",
                  md: "translate(-100%, 50%)",
                },
                backgroundColor: "#000",
                p: 5,
                my: 5,
                transition: "transform 1s",
              }}
              className="dev"
              id="dev-title"
            >
              <Typography
                color="white"
                className="dev"
                fontFamily={"Source Code Pro, monospace"}
                variant="body2"
              >
                The developer
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: {
                  xs: "translate(-100%, 0)",
                  md: "translate(-100%, 150%)",
                },
                backgroundColor: "#000",
                p: 5,
                my: 5,
                color: "white",
                whiteSpace: "nowrap",
                textAlign: "left",
                overflow: "hidden",
                transition: "transform 1s",
              }}
              className="dev"
              id="dev-info"
            >
              <Typography
                className="dev"
                fontFamily={"Source Code Pro, monospace"}
                variant="body2"
              >
                JAMstack enthusiast
              </Typography>
              <Typography
                className="dev"
                fontFamily={"Source Code Pro, monospace"}
                variant="body2"
              >
                Robust problem solver and idea generator
              </Typography>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Homepage;
