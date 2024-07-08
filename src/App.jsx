import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <>
      <div className="container-fluid p-2">
        <div className="row px-2">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card title="Sales" className="Success" amount={100000} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card title="Purchase" className="Danger" amount={100000} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card title="Sales this Month" className="Success" amount={100000} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <Card title="Purchase this Month" className="Danger" amount={100000} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
