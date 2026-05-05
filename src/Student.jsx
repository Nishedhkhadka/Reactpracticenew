

import PropTypes from "prop-types"
function Student({
  name="guest",
  age=8,
  isStudent=false
}) {
  return (
    <>
    <div className="m-6  border-2 inline-block font-5" >
          <p>Name:{name} </p>
      <p>Age:{age}</p>
      <p>Student:{isStudent ? "verified" : "unverified"} </p>
    </div>
  
    </>
  );
}



Student.propTypes ={ 
  name : PropTypes.string,  
  age: PropTypes.number,
  isStudent: PropTypes.bool,

}
export default Student;


