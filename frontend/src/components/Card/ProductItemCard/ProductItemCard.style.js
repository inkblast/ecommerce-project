import { makeStyles } from "@mui/styles";
import { COLORS,SIZES } from "../../../constants";


const useStyles = makeStyles({

    container:{
        margin:"20px 0px 20px 50px"
    },

    cardContainer:{
        maxWidth:216
    },
    
    cardMedia:{
        height: 200
    },

    cardContent:{
        display:"flex"
    },
    mainTxt:{
        fontSize:SIZES.medium,
        fontWeight:"bold"
    },

    subText:{
        fontSize:SIZES.small,
        fontWeight:"regular"
    },

    priceTxt:{
        fontSize:SIZES.large,
        fontWeight:"bold"
    }

})

export default useStyles