import { connect } from "react-redux"

const Dashboard = (props) => {

    return <div>

        <h2>User Profile</h2>
        <div> Name:- {props.main.user?.name} </div>
        <div> Email:- {props.main.user?.email} </div>

    </div>

}

const mapStateToProps = state => {
    return {main: state}
}

export default connect(mapStateToProps)(Dashboard)