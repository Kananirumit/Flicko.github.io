import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown, Badge, Image } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaDonate } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
export default function Topbar() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Navbar bg="light" expand="lg" className="mb-4 shadow">
          <Button variant="link" className="d-md-none rounded-circle mr-3">
            <FaBars />
          </Button>
          <Form inline className="mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <FormControl type="text" placeholder="Search for..." className="mr-sm-2 bg-light border-0 small" />

            <Button variant="primary"><FaSearch /></Button>

          </Form>
          <Nav className="ml-auto">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="no-arrow d-sm-none">
                <FaSearch />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-right p-3 shadow animated--grow-in">
                <Form inline className="mr-auto w-100 navbar-search">
                  <FormControl type="text" placeholder="Search for..." className="mr-sm-2 bg-light border-0 small" />
                  <Button variant="primary">
                    <FaSearch />
                  </Button>
                </Form>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={Nav.Item} className="no-arrow mx-1">
              <Dropdown.Toggle as={Nav.Link}>
                <FaBell />
                <Badge variant="danger" className="badge-counter">3+</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-right shadow animated--grow-in">
                <Dropdown.Header>Alerts Center</Dropdown.Header>
                <Dropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-primary">
                      <IoIosMail />
                    </div>
                    <div className="ml-3">
                      <div className="small text-gray-500">December 12, 2019</div>
                      <span className="font-weight-bold">A new monthly report is ready to download!</span>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-success">
                      <FaDonate />
                    </div>
                    <div className="ml-3">
                      <div className="small text-gray-500">December 7, 2019</div>
                      $290.29 has been deposited into your account!
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <div className="icon-circle bg-warning">
                      <IoIosWarning />
                    </div>
                    <div className="ml-3">
                      <div className="small text-gray-500">December 2, 2019</div>
                      Spending Alert: We've noticed unusually high spending for your account.
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#" className="text-center small text-gray-500">Show All Alerts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={Nav.Item} className="no-arrow mx-1">
              <Dropdown.Toggle as={Nav.Link}>
                <IoIosMail />
                <Badge variant="danger" className="badge-counter">7</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-right shadow animated--grow-in">
                <Dropdown.Header>Message Center</Dropdown.Header>
                <Dropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <Image className="rounded-circle" src="img/undraw_profile_1.svg" alt="..." width="40" height="40" />
                    <div className="status-indicator bg-success"></div>
                    <div className="ml-3">
                      <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                      <div className="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <Image className="rounded-circle" src="img/undraw_profile_2.svg" alt="..." width="40" height="40" />
                    <div className="status-indicator"></div>
                    <div className="ml-3">
                      <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                      <div className="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <Image className="rounded-circle" src="img/undraw_profile_3.svg" alt="..." width="40" height="40" />
                    <div className="status-indicator bg-warning"></div>
                    <div className="ml-3">
                      <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                      <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <div className="d-flex align-items-center">
                    <Image className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." width="40" height="40" />
                    <div className="status-indicator bg-success"></div>
                    <div className="ml-3">
                      <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                      <div className="small text-gray-500">Chicken the Dog · 2w</div>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#" className="text-center small text-gray-500">Read More Messages</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item className="d-none d-sm-block">
              <div className="topbar-divider"></div>
            </Nav.Item>
            <Dropdown as={Nav.Item} className="no-arrow">
              <Dropdown.Toggle as={Nav.Link}>
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                <Image className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="..." width="40" height="40" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-right shadow animated--grow-in">
                <Dropdown.Item href="#">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#" data-toggle="modal" data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
}
