import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../api";
import { enterUser, saveCurrentOrder } from "../store/actions";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  let check = { name: null, password: null };
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const change = (e) => {
        check[e.target.name] = e.target.value;
    }
        let login = (e) => {
        e.preventDefault();
        checkUser(check).then(res => {
            dispatch(enterUser(res));
            dispatch(saveCurrentOrder(res));
            alert(`ברוך שובך: ${res.name}!`);
            navigate("/list");
        }).catch(err => {
            console.log(err);
            alert('משתמש זה אינו קיים במערכת!');
            navigate("/register");
        })
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          כניסה
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="שם משתמש"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={change}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="סיסמה"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={change}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            היכנס
          </Button>
          <Grid container>
            <Grid item>
              <Link href='register' variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}