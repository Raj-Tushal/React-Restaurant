import propTpes from 'prop-types';
function Student(props) {
  return (
    <div className="border border-slate-300 p-2">
       <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.student ? "Yes" : "No"}</p>
    </div>
  );
}

// dusra tarika
// import propTpes from 'prop-types';
// function Student({name,age,student}) {
//   return (
//     <div className="border border-slate-300 p-2">
//        <p>Name: {name}</p>
//         <p>Age: {age}</p>
//         <p>Student: {student ? "Yes" : "No"}</p>
//     </div>
//   );
// }



Student.prototypes = {
    name: propTpes.string,
    age: propTpes.number,
    student: propTpes.bool
  }
  Student.defaultProps = {
   name:"john doe",
   age:18,
   student:true,
  }

export default Student