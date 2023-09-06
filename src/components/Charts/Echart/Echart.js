import React from "react";
import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import ReactEcharts from "echarts-for-react";
import * as echarts from "./data";
const Echart = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          ECHART CHARTS
        </span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Charts
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Echart Charts
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart5" className="ht-300">
              <ReactEcharts
                id="echart5"
                classNameName="chartsh"
                option={echarts.echart5.option}
                series={echarts.echart5.series}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart6" className="ht-300">
              <ReactEcharts
                id="echart6"
                classNameName="chartsh"
                option={echarts.echart6.option}
                series={echarts.echart6.series}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Bar Chart</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart1" className="ht-300">
              <ReactEcharts
                id="echart1"
                option={echarts.echart1.option}
                series={echarts.echart1.series}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Vertical Bar Chart</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart3" className="ht-300">
              <ReactEcharts
                id="echart3"
                classNameName="chartsh"
                option={echarts.echart3.option}
                series={echarts.echart3.series}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Line Chart</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart2" className="ht-300">
              <ReactEcharts
                id="echart2"
                classNameName="chartsh"
                option={echarts.echart2.option}
                series={echarts.echart2.series}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Vertical Line Chart</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart4" className="ht-300">
              <ReactEcharts
                id="echart4"
                classNameName="chartsh"
                option={echarts.echart4.option}
                series={echarts.echart4.series}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart7" className="ht-300">
              <ReactEcharts
                id="echart7"
                classNameName="chartsh"
                option={echarts.echart7.option}
                series={echarts.echart7.series}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="echart8" className="ht-300">
              <ReactEcharts
                id="echart8"
                option={echarts.echart8.option}
                series={echarts.echart8.series}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Data Attributes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div id="">
              <ReactEcharts
                id="index"
                className="ht-300"
                option={echarts.echart9.option}
                series={echarts.echart9.series}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row closed --> */}
  </div>
);

Echart.propTypes = {};

Echart.defaultProps = {};

export default Echart;
