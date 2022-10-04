// import { MenuItem, TextField } from '@mui/material'
// import FormControl from '@mui/material/FormControl'
// import InputLabel from '@mui/material/InputLabel'
// import OutlinedInput from '@mui/material/OutlinedInput'

// type UpdateState = React.Dispatch<React.SetStateAction<{
//     name: string;
//     type: undefined;
//     ingredients: string;
//     category: undefined;
//     weight: number;
//     price: number;
//     description: string;
//     allergens: {
//         celery: boolean;
//         gluten: boolean;
//         crustaceans: boolean;

//         sulphites: boolean;
//     };
//     nutritionalValues: {

//     };
// }>>

// const Stage0 = ({ setNewMealForm }: { setNewMealForm }) => {

//     return (
//         <>
//             <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
//                 <InputLabel htmlFor="name">Nombre</InputLabel>
//                 <OutlinedInput
//                     id="name"
//                     type="text"
//                     name="name"
//                     value={newMealForm.name}
//                     onChange={handleInputChange}
//                     label="name"
//                 />
//             </FormControl>

//             <TextField
//                 id="outlined-select-currency"
//                 select
//                 label="Tipo"
//                 name="type"
//                 value={newMealForm.type}
//                 onChange={handleInputChange}
//                 helperText="Please select a meal type"
//             >
//                 {typesSelect.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                     </MenuItem>
//                 ))}
//             </TextField>

//             <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
//                 <InputLabel htmlFor="ingredients">Ingredientes</InputLabel>
//                 <OutlinedInput
//                     multiline
//                     rows={4}
//                     id="ingredients"
//                     type="text"
//                     name="ingredients"
//                     value={newMealForm.ingredients}
//                     onChange={handleInputChange}
//                     label="ingredients"
//                 />
//             </FormControl>

//             <TextField
//                 id="outlined-select-currency"
//                 select
//                 label="Categoría"
//                 name="category"
//                 value={newMealForm.category}
//                 onChange={handleInputChange}
//                 helperText="Please select a meal category"
//             >
//                 {categoriesSelect.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                     </MenuItem>
//                 ))}
//             </TextField>

//             <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined">
//                 <InputLabel htmlFor="weight">Peso</InputLabel>
//                 <OutlinedInput
//                     id="weight"
//                     type="number"
//                     name="weight"
//                     value={newMealForm.weight}
//                     onChange={handleInputChangeValueNumber}
//                     label="weight"
//                 />
//             </FormControl>

//             <FormControl required sx={{ m: 1, width: '25ch' }} variant="outlined">
//                 <InputLabel htmlFor="price">Precio</InputLabel>
//                 <OutlinedInput
//                     id="price"
//                     type="number"
//                     name="price"
//                     value={newMealForm.price}
//                     onChange={handleInputChangeValueNumber}
//                     label="price"
//                 />
//             </FormControl>

//             <FormControl required sx={{ m: 1, width: '80ch' }} variant="outlined">
//                 <InputLabel htmlFor="description">Descripción</InputLabel>
//                 <OutlinedInput
//                     multiline
//                     rows={4}
//                     id="description"
//                     type="text"
//                     name="description"
//                     value={newMealForm.description}
//                     onChange={handleInputChange}
//                     label="description"
//                 />
//             </FormControl>
//         </>
//     )
// }

const Stage0 = () => {
    return (
        <></>
    )
}

export default Stage0