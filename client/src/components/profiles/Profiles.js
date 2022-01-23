import './profile.css';
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import images from '../../img/images.png';
import { Link } from 'react-router-dom';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment> <section style={{display:'flex'}}>  
          <section>
          <h1 className='large text-primary'>Assessment</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> How do you feel?
          </p>
          <button className='btn'> good </button>
          <button className='btn'> bad </button>
          <button className='btn'> meh </button>
          <button className='btn'> awful </button>
          <button className='btn'> rad </button>
          <div> 
          <button className='bt'><Link to='/Relax'>control my emotions
          
          </Link> </button>
 
          </div>
          
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4></h4>
            )}
          </div>

          </section>
          <section>
               <img src={images}alt='img' style={{height:200 ,width:200}}/>
                </section>
            </section>     
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
