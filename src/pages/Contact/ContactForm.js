import {
  Box,
  Button,
  Container,
  // Container,
  // Typography,
  TextField,
  Typography,
  // Stack,
  // Button,
} from "@mui/material";
//   import LinearP from "../../component/LinearP";
import LinearP from "../../components/LinearP";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Stack from "@mui/material/Stack";

const ContactForm = () => {
  const [name, setName] = useState("");
  // const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    // <Box sx={{ width: "100%", height: "105vh", backgroundColor: "#EFF2F7" }}>
    //   <Container>
    //     <Typography
    //       sx={{
    //         color: "#0c5adb",
    //         textAlign: "center",
    //         letterSpacing: "4px",
    //         fontWeight: "500",
    //         pt: "5rem",
    //       }}
    //     >
    //       CONTACT US
    //     </Typography>
    //     <Typography sx={{ lineHeight: "0.5rem" }}>
    //       <Typography
    //         sx={{
    //           textAlign: "center",
    //           fontSize: "40px",
    //           fontWeight: "600",
    //           p: "0.5rem 0.5rem 0 0.5rem",
    //         }}
    //       >
    //         Feel Free Contact
    //       </Typography>
    //       <Typography
    //         sx={{
    //           textAlign: "center",
    //           fontSize: "40px",
    //           fontWeight: "600",
    //         }}
    //       >
    //         Us Now
    //       </Typography>
    //     </Typography>

    //     <LinearP align={"center"} />

    //     <Box>
    //       <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
    //         <TextField
    //           sx={{ backgroundColor: "white", borderColor: "black" }}
    //           type="text"
    //           label="Name"
    //           onChange={(e) => setName(e.target.value)}
    //           value={Name}
    //           fullWidth
    //           required
    //         />
    //         <TextField
    //           sx={{ backgroundColor: "white", borderColor: "black" }}
    //           type="text"
    //           label="Email"
    //           onChange={(e) => setEmail(e.target.value)}
    //           value={email}
    //           fullWidth
    //           required
    //         />
    //       </Stack>
    //       <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
    //         <TextField
    //           type="text"
    //           label="Phone"
    //           onChange={(e) => setPhone(e.target.value)}
    //           value={phone}
    //           fullWidth
    //           sx={{ backgroundColor: "white", borderColor: "black" }}
    //           required
    //         />
    //         <TextField
    //           sx={{
    //             backgroundColor: "white",
    //             "&:focus": { borderColor: "black" },
    //           }}
    //           type="text"
    //           label="Contact"
    //           onChange={(e) => setContact(e.target.value)}
    //           value={contact}
    //           fullWidth
    //           required
    //         />
    //       </Stack>
    //       <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
    //         <TextField
    //           sx={{
    //             backgroundColor: "white",
    //             outline:"none"
    //           }}
    //         //   id="outlined-multiline-static"
    //           label="Message"
    //           multiline
    //           onChange={(e) => setMessage(e.target.value)}
    //           value={message}
    //           fullWidth
    //           rows={4}
    //         />
    //       </Stack>
    //       <Stack
    //         sx={{
    //           diaplay: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Button
    //           sx={{
    //             height: "3rem",
    //             width: "15rem",
    //             backgroundColor: "blue",
    //             color: "white",
    //             "&:hover": { backgroundColor: "blue" },
    //           }}
    //         >
    //           Free Consultant
    //         </Button>
    //       </Stack>
    //     </Box>
    //   </Container>
    // </Box>
    <Box sx={{ width: "100%", height: {xs:"85vh", sm:"98vh", md:"99vh"} }}>
      <Container >
        <Typography
          sx={{
            p: {
              xs: "2.5rem 0 1rem 0.2rem",
              sm: "2.5rem 0 1rem 0.2rem",
              md: "4rem 0 1rem 0.2rem",
            },
            fontSize: { xs: "20px", sm: "30px", md: "40px" },
            fontWeight: { xs: "700", sm: "700", md: "700" },
          }}
        >
          Let’s Build Something Great Together
        </Typography>
        <LinearP align={"left"} />
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "65%" },
            height: { xs: "7rem", sm: "7rem", md: "4rem" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "15px", md: "16px" },
              p: {
                xs: "0rem 0 1rem 0.2rem",
                sm: "0rem 0 1rem 0.2rem",
                md: "0rem 0 1rem 0.2rem",
              },
            }}
          >
            If you are planning to build and grow your online business, we are
            happy to help you. Don’t wait until someone else comes up with a
            similar idea and leaves you out wondering.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "90vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "38ch", sm: "36ch", md: "75ch" },
              },
              height: "80vh",
              width: { xs: "100%", sm: "100%", md: "65%" },
              // border: "1px solid black",
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={2}>
              <TextField
                id="standard-text-input"
                label="Name"
                type="text"
                // autoComplete="current-password"
                variant="standard"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              <TextField
                id="standard-text-input"
                label="Email"
                type="text"
                // autoComplete="current-password"
                variant="standard"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}

              />
              <TextField
                id="standard-number-input"
                label="Phone no"
                type="number"
                // autoComplete="current-password"
                variant="standard"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}

              />
              <TextField
                id="standard-multiline-static"
                label="What would you like to know about?"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="standard"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}

              />
            </Stack>

            <Box sx={{ width: "100%" }}>
              <Button
                variant="contained"
                sx={{
                  width: { xs: "98%", sm: "100%", md: "15rem" },
                  height: "3rem",
                  m: { xs: "7% 0 0 1%", sm: "7% 0 0 1%", md: "4.5% 0 0 0.5%" },
                }}
              >
                Send Message <KeyboardArrowRightIcon />
              </Button>
            </Box>
          </Box>
          <Box
        sx={{
          background: "#dcfcff",
          width: "35%",
          height: "55%",
          borderRadius: "50%",
          display: {xs:"none", sm:"none", md:"flex"},

        }}
      >
        <Box
          component={"img"}
          width={"90%"}
          height={"90%"}
          src="/images/cc.webp"
        />
      </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
