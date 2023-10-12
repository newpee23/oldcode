import { pageComponents } from "../../types/pageType"

const Page1 = (props: pageComponents) => {
  return (
    <div>Page1 {props.status}</div>
  )
}

export default Page1