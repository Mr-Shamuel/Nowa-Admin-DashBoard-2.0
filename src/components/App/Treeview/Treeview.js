import React from "react";
import { Breadcrumb,Card, Col, Row } from "react-bootstrap";
import TreeView from "deni-react-treeview";
import {
  treeviews,
  treeview1,
  treeviewXRP,
  treeview3,
  treeview2,
  treeview4,
  treeview5,
  treeview6,
} from "./data";
const Treeview = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">TREEVIEW</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Apps
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Treeview
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <h3 className="card-title  mg-b-10">Basic Treeview</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <Row>
              {/* <!-- col --> */}
              <Col sm={12} xl={4} md={12} lg={6}>
                <ul id="treeview1" className="tree">
                  <li>
                    <TreeView
                      // className="branch"
                      style={{ height: "auto" }}
                      showIcon={false}
                      items={treeviews}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview"
                      style={{ height: "auto" }}
                      showIcon={false}
                      className="branch"
                      items={treeviewXRP}
                    />
                  </li>
                </ul>
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col className="mt-4 mt-lg-0" lg={6} xl={4} md={12} sm={12}>
                <ul id="treeview2" className="tree">
                  <li>
                    <TreeView
                      id="treeview"
                      style={{ height: "auto" }}
                      showIcon={false}
                      className="branch"
                      items={treeviews}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview"
                      style={{ height: "auto" }}
                      showIcon={false}
                      className="branch"
                      items={treeviewXRP}
                    />
                  </li>
                </ul>
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col className="mt-4 mt-lg-0" lg={6} xl={4} md={12} sm={12}>
                <ul id="treeview3" className="tree">
                  <li>
                    <TreeView
                      id="treeview"
                      style={{ height: "auto" }}
                      showIcon={false}
                      className="branch"
                      items={treeviews}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview"
                      style={{ height: "auto" }}
                      showIcon={false}
                      className="branch"
                      items={treeviewXRP}
                    />
                  </li>
                </ul>
              </Col>
              {/* <!-- /col --> */}
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Tree View Styles</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <Row>
              {/* <!-- col --> */}
              <Col sm={12} xl={4} md={12} lg={6}>
                <ul id="tree1" className="tree">
                  <li>
                    <TreeView
                      id="treeview1"
                      style={{ height: "auto" }}
                      showIcon={false}
                      className="branch"
                      items={treeview1}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview2"
                      showIcon={false}
                      className="branch"
                      style={{ height: "auto" }}
                      items={treeview2}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview3"
                      showIcon={false}
                      className="branch"
                      style={{ height: "auto" }}
                      items={treeview3}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview4"
                      showIcon={false}
                      className="branch"
                      style={{ height: "auto" }}
                      items={treeview4}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview5"
                      showIcon={false}
                      className="branch"
                      style={{ height: "auto" }}
                      items={treeview5}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview6"
                      showIcon={false}
                      className="branch"
                      style={{ height: "auto" }}
                      items={treeview6}
                    />
                  </li>
                </ul>
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col className="mt-4 mt-lg-0" lg={6} xl={4} md={12} sm={12}>
                <ul id="tree2" className="tree">
                  <li>
                    <TreeView
                      id="treeview1"
                      style={{ height: "auto" }}
                      showIcon={true}
                      className="branch"
                      items={treeview1}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview2"
                      style={{ height: "auto" }}
                      showIcon={true}
                      className="branch"
                      items={treeview2}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview3"
                      style={{ height: "auto" }}
                      showIcon={true}
                      className="branch"
                      items={treeview3}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview4"
                      style={{ height: "auto" }}
                      showIcon={true}
                      className="branch"
                      items={treeview4}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview5"
                      style={{ height: "auto" }}
                      showIcon={true}
                      className="branch"
                      items={treeview5}
                    />
                  </li>
                  <li>
                    <TreeView
                      id="treeview6"
                      style={{ height: "auto" }}
                      showIcon={true}
                      className="branch"
                      items={treeview6}
                    />
                  </li>
                </ul>
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col className="mt-4 mt-lg-0" lg={6} xl={4} md={12} sm={12}>
                <ul id="tree3" className="tree">
                  <li>
                   <TreeView
                        id="treeview1"
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview1}
                        style={{ height: "auto" }}
                        theme={"purple"}
                      />
                  </li>
                  <li>
                   <TreeView
                        id="treeview2"
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview2}
                        style={{ height: "auto" }}
                        theme={"purple"}
                      />
                  </li>
                  <li>
                   <TreeView
                        id="treeview3"
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview3}
                        style={{ height: "auto" }}
                        theme={"purple"}
                      />
                  </li>
                  <li>
                   <TreeView
                        id="treeview4"
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview4}
                        style={{ height: "auto" }}
                        theme={"purple"}
                      />
                  </li>
                  <li>
                    <TreeView
                        id="treeview5"
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview5}
                        style={{ height: "auto" }}
                        theme={"purple"}
                      />
                  </li>
                  <li>
                    <TreeView
                        id="treeview6"
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview6}
                        style={{ height: "auto" }}
                        theme={"purple"}
                      />
                  </li>
                </ul>
              </Col>
              {/* <!-- /col --> */}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row --> */}
  </div>
);

Treeview.propTypes = {};

Treeview.defaultProps = {};

export default Treeview;
