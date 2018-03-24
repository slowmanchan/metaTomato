import React from 'react';
import { Tabs, Icon, Col, Row, Card } from 'antd';
const TabPane = Tabs.TabPane

const ResultsTabs = ({movieList, tvList, pplList}) => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab={<span><Icon type="video-camera" />Movies</span>} key="1">
        {movieList}
      </TabPane>
      <TabPane tab={<span><Icon type="laptop" />TV</span>} key="2">
        {tvList}
      </TabPane>
      <TabPane tab={<span><Icon type="user" />People</span>} key="3">
        {pplList}
      </TabPane>
    </Tabs>
  )
}

export default ResultsTabs;
