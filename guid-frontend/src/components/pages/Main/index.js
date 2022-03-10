import { connect } from 'react-redux';
import Main from './Main';
import loadProfileData from '../../../store/actions/loadProfileData/loadProfileData';

const mapStateToProps = (state) => ({
	main: state.main,
});

const mapDispatchToProps = (dispatch) => ({
	loadProfileData: (id) => dispatch(loadProfileData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
