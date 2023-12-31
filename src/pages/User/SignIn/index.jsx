/* import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; */
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../Copyright";
import { Container } from "react-bootstrap";
import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import useAuth from "../../../hooks/useAuth";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const { login } = useAuth();
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxwidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingresá
                    </Typography>
                    <Formik
                        initialValues={{ password: "", email: "" }}
                        validate={(values) => {
                            const errors = {};
                            const regexEmail =
                                /^[A-Z0-9._%+-]+@[A-Z0-9•-]+\.[A-Z]{2,}$/i;

                            if (!values.email) {
                                errors.email = "Email requerido";
                            } else if (!regexEmail.test(values.email)) {
                                errors.email = "Email inválido";
                            }

                            if (!values.password) {
                                errors.password = "Contraseña requerida";
                            }

                            return errors;
                        }}
                        onSubmit={(values) => {
                            login(values);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    error={errors.email && touched.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        errors.email &&
                                        touched.email &&
                                        errors.email
                                    }
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    autoFocus
                                    value={values.password}
                                    error={errors.password && touched.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={
                                        errors.password &&
                                        touched.password &&
                                        errors.password
                                    }
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Iniciar
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Link to="/register" variant="body2">
                                            No tienes cuenta? Registrate
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}
                    </Formik>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
