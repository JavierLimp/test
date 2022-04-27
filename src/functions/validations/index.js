import isEmpty from 'lodash/isEmpty'

export const validationIsEmpty = ({categoria, inventario, precio, nombre, zapatos, cantidad }) => {
    let isEmp = false

    if( isEmpty( nombre )   || isEmpty( zapatos ) || isEmpty( precio )      ||
        isEmpty( categoria )       || isEmpty( precio )  || isEmpty( cantidad ) || isEmpty( inventario )){

            isEmp = true
    }
    return isEmp
}