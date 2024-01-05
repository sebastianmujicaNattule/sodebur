import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import GalleryDetail from 'containers/pages/GalleryDetail';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import SingleLightbox from 'components/pages/SingleLightbox';
import whotoFollowData from 'data/follow';
import UserFollow from 'components/common/UserFollow';
import recentPostsData from 'data/recentposts';
import RecentPost from 'components/common/RecentPost';
import posts from 'data/posts';
import Post from 'components/cards/Post';

const followData = whotoFollowData.slice(0, 5);

const Feed = ({ match }) => {

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb match={match} />
              <Row>
                <Colxx xxs="12" className="mb-5">
                  <Card>
                    <SingleLightbox
                      thumb="/assets/img/social/header.jpg"
                      large="/assets/img/social/header.jpg"
                      className="social-header card-img"
                    />
                  </Card>
                </Colxx>
                <Colxx xxs="12" lg="5" xl="4" className="col-left">

                  <Card className="mb-4">
                    <CardBody>
                      <CardTitle>
                        <IntlMessages id="pages.similar-projects" />
                      </CardTitle>
                      <GalleryDetail />
                    </CardBody>
                  </Card>

                  <Card className="mb-4">
                    <CardBody>
                      <CardTitle>
                        <IntlMessages id="pages.who-to-follow" />
                      </CardTitle>
                      <div className="remove-last-border remove-last-margin remove-last-padding">
                        {followData.map((itemData) => {
                          return (
                            <UserFollow
                              data={itemData}
                              key={`follow_${itemData.key}`}
                            />
                          );
                        })}
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="mb-4">
                    <CardBody>
                      <CardTitle>
                        <IntlMessages id="pages.recent-posts" />
                      </CardTitle>
                      <div className="remove-last-border remove-last-margin remove-last-padding">
                        {recentPostsData.map((itemData) => {
                          return (
                            <RecentPost
                              data={itemData}
                              key={`recent_${itemData.key}`}
                            />
                          );
                        })}
                      </div>
                    </CardBody>
                  </Card>
                </Colxx>
                <Colxx xxs="12" lg="7" xl="8" className="col-right">
                  {posts.map((itemData) => {
                    return (
                      <Post
                        data={itemData}
                        key={`post_${itemData.key}`}
                        className="mb-4"
                      />
                    );
                  })}
                </Colxx>
              </Row>
        </Colxx>
      </Row>
    </>
  );
};
export default Feed;
