// import { useState, useRef, useEffect } from 'react';
// import { useForm } from 'react-hook-form';

// export const DropDownFilters = ({
//   setUserStatusInput,
//   setUserGenderInput,
//   setUserSpeciesInput,
//   setUserTypeInput,
// }) => {
//   const { register, handleSubmit, reset } = useForm();
//   const statusRef = useRef(null);
//   const [data, setData] = useState([]);
//   const onSubmit = (data) => {};

//   console.log(data);

//   return (
//     <>
//       <div className="form-wrapper">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <label className="fom=label">Status</label>
//           <select
//             className="form-field"
//             type="dropdown"
//             name="status"
//             {...register('value_name')}
//             onChange={(event) => {
//               setUserStatusInput(event.target.value);
//               reset();
//             }}
//           >
//             <option value="">Any</option>
//             <option value="alive">Alive</option>
//             <option value="dead">Dead</option>
//             <option value="unknown">Unknown</option>
//           </select>
//           <select
//             className="form-field"
//             type="dropdown"
//             name="gender"
//             {...register('value_name')}
//             onChange={(event) => {
//               setUserGenderInput(event.target.value);
//               // reset();
//             }}
//           >
//             <option value="">Any</option>
//             <option value="female">Female</option>
//             <option value="male">Male</option>
//             <option value="genderless">Genderless</option>
//             <option value="unknown">Unknown</option>
//           </select>
//           <select
//             className="form-field"
//             type="dropdown"
//             name="species"
//             {...register('value_name')}
//             onChange={(event) => {
//               setUserSpeciesInput(event.target.value);
//               // reset();
//             }}
//           >
//             <option value="">Any</option>
//             <option value="human">Human</option>
//             <option value="alien">Alien</option>
//             <option value="humanoid">Humanoid</option>
//             <option value="poopybutthole">Poopybutthole</option>
//             <option value="mythological">Mythological</option>
//             <option value="animal">Animal</option>
//             <option value="disease">Disease</option>
//             <option value="robot">Robot</option>
//             <option value="cronenberg">Cronenberg</option>
//             <option value="planet">Planet</option>
//             <option value="unknown">Unknown</option>
//           </select>
//         </form>
//       </div>
//     </>
//   );
// };
