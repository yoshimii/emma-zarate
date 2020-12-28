import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './Writing.css';

export default function Writing() {

  return (
    <>
      <section>
        <Link href='https://dev.to/yoshimii/what-i-learned-from-my-first-time-with-terraform-and-ci-cd-25dd' target='_blank'>
          <Typography component="h5">
          What I Learned from My First Time with Terrafrom and CI/CD
            </Typography>
        </Link>
        <hr style={{width: "75%", marginBottom: "1rem"}}></hr>
        <Link href='https://dev.to/yoshimii/learning-react-make-it-accessible-now-1bb7' target='_blank'>
        <Typography component="h5">
          Learning React? Make it Accessible Now
        </Typography>
        </Link>
    </section>
    </>
  );
}