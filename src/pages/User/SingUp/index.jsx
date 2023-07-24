import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "react-bootstrap";
import Copyright from "../Copyright";
import {
    Avatar,
    Box,
    Container,
    CssBaseline,
    createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import useAuth from "../../../hooks/useAuth";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const { register } = useAuth();
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
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
                        Registrate
                    </Typography>

                    <Formik
                        initialValues={{ name: "", email: "", password: "" }}
                        validate={(values) => {
                            const errors = {};
                            const regexEmail =
                                /^[A-Z0-9._%+-]+@[A-Z0-9•-]+\.[A-Z]{2,}$/i;

                            if (!values.email) {
                                errors.email = "Email requerido";
                            } else if (!regexEmail.test(values.email)) {
                                errors.email = "Email inválido";
                            }

                            if (!values.name) {
                                errors.name = "Nombre requerido";
                            }

                            if (!values.password) {
                                errors.password = "Contraseña requerida";
                            }

                            return errors;
                        }}
                        onSubmit={(values) => {
                            register(values);
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
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 3 }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            name="name"
                                            label="Nombre"
                                            type="text"
                                            id="name"
                                            autoFocus
                                            value={values.name}
                                            error={errors.name && touched.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={
                                                errors.name &&
                                                touched.name &&
                                                errors.name
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={values.email}
                                            error={
                                                errors.email && touched.email
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={
                                                errors.email &&
                                                touched.email &&
                                                errors.email
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            id="password"
                                            label="Contraseña"
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            error={
                                                errors.password &&
                                                touched.password
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={
                                                errors.password &&
                                                touched.password &&
                                                errors.password
                                            }
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Registrarme
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to="/login" variant="body2">
                                            Ya tienes una cuenta? Inicia sesión
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}
                    </Formik>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
