import Layout from 'src/components/Layout';
import React from 'react';
import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { Breadcrumbs, Typography } from '@material-ui/core';

function CourseCreate() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="bg-white">
          <Button>Hello</Button>
          {/* <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Material-UI
            </Link>
            <Link color="inherit" href="/getting-started/installation/">
              Core
            </Link>
            <Typography color="textPrimary">Breadcrumb</Typography>
          </Breadcrumbs> */}
        </div>
      </div>
    </Layout>
  );
}

export default CourseCreate;
