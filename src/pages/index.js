import * as React from "react";
import { Layout } from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Link, Typography, useTheme } from "@mui/material";

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

const IndexPage = () => {
  const [hovered, setHovered] = React.useState("");

  const theme = useTheme();
  const onlyBigScreens = theme.breakpoints.up("md");

  const handleHover = (e) => {
    if (onlyBigScreens) {
      const getClass = e.target.className;
      /dev/.test(getClass) && setHovered("dev");
      /photo/.test(getClass) && setHovered("photo");
      /header/.test(getClass) && setHovered(" ");
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: "0 auto",
          backgroundColor: "#000",
          py: 3,
          px: 5,
          zIndex: "1201",
          whiteSpace: "nowrap",
        }}
        className="header"
        onMouseOver={(e) => handleHover(e)}
      >
        <Typography
          variant="h1"
          component="h1"
          className="header"
          fontFamily={"Playfair Display, serif"}
        >
          Alexandru Gorgos
        </Typography>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{ width: "100%", height: "100%" }}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            borderRight: { md: "1px solid white" },
            overflow: "hidden",
            flex: 1,
          }}
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
                  xs: "translate(0, -100%)",
                  md: "translate(100%, 50%)",
                },
                backgroundColor: "#000",
                p: 5,
                my: 5,
                color: "white",
                transition: { xs: "none", md: "transform 1s" },
              }}
              className="photo"
              id="photo-title"
            >
              <Typography
                fontFamily={"Poppins, sans-serif"}
                letterSpacing={1.2}
                className="photo"
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
                  xs: "translate(0, 25%)",
                  md: "translate(100%, 150%)",
                },
                backgroundColor: "#000",
                p: 5,
                my: 5,
                color: "white",
                whiteSpace: "nowrap",
                textAlign: "right",
                overflow: "hidden",
                transition: { xs: "none", md: "transform 1s" },
              }}
              className="photo"
              id="photo-info"
            >
              <Typography
                fontFamily={"Poppins, sans-serif"}
                letterSpacing={1.2}
                className="photo"
              >
                Candid photography lover
              </Typography>
              <Typography
                fontFamily={"Poppins, sans-serif"}
                letterSpacing={1.2}
                className="photo"
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
            flex: 1,
          }}
        >
          <Link
            href="https://dev.alexandrugorgos.com"
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
                  xs: "translate(0, -100%)",
                  md: "translate(-100%, 50%)",
                },
                backgroundColor: "#000",
                p: 5,
                my: 5,
                transition: { xs: "none", md: "transform 1s" },
              }}
              className="dev"
              id="dev-title"
            >
              <Typography
                color="white"
                className="dev"
                fontFamily={"Source Code Pro, monospace"}
                letterSpacing={1.2}
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
                  xs: "translate(0, 25%)",
                  md: "translate(-100%, 150%)",
                },
                backgroundColor: "#000",
                p: 5,
                my: 5,
                color: "white",
                whiteSpace: "nowrap",
                textAlign: "left",
                overflow: "hidden",
                transition: { xs: "none", md: "transform 1s" },
              }}
              className="dev"
              id="dev-info"
            >
              <Typography
                className="dev"
                fontFamily={"Source Code Pro, monospace"}
                letterSpacing={1.2}
              >
                JAMstack enthusiast
              </Typography>
              <Typography
                className="dev"
                fontFamily={"Source Code Pro, monospace"}
                letterSpacing={1.2}
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

export default IndexPage;
