import React from "react";
import UsersTab from "../UserTable/UsersTab";

const test = () => {
	return (
		<div>
			{user._id === coment.user_id || (user.role = "admin") ? (
				<>
					<a //delete coment
						className='btn btn-trans btn-icon fa fa-trash add-tooltip'
						onClick={() => dispatch(deleteComment(coment._id))}
					/>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default test;
