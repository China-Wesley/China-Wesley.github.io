import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './layout.scss'
import Path from '../router'
import Path2 from '../router2'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;




export default class layout extends Component {
    static propTypes = {
        menuItemList: PropTypes.array.isRequired,
        // store: PropTypes.object
    }

    handlerClick = (e, n) => {
        let action = {
            type: 'ADD'
        }
        let sub = {
            type: 'REDUCE'
        }
        this.props.store.dispatch(action)
    }

    componentDidMount() {
        console.log('组件挂载完毕')
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <Layout>
                    {/* <Header className="header"> */}
                    {/* <div className="logo" /> */}
                    {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}> */}
                    {
                        this.props.menuItemList.map((item, index) => (
                            <NavLink key={index + 1} to="/home">
                                <div onClick={this.handlerClick.bind(this, 1)}>{item}</div>
                            </NavLink>
                        ))
                    }
                    <NavLink to="/host">
                        <div onClick={this.handlerClick.bind(this, 1)}>bar4</div>
                    </NavLink>
                    {/* </Menu> */}
                    {/* </Header> */}
                    {/* <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                {this.props.store.getState()}

                             
                      </Content>
                        </Layout>
                    </Layout> */}
                </Layout>
                <Switch>
                    <Route path="/home" component={Path}></Route>
                    <Route path="/host" component={Path2}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
            </div>
        )
    }
}
