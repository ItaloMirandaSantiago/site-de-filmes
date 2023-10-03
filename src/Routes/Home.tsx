import { ImageShadow } from "../components/ImageShadow"
import { Menu } from "../components/Menu"
import { PathRequests } from "../components/PathRequests"

export const Home = ()=>{
    return(
        <div>
            <Menu />
            <ImageShadow />
            <PathRequests />
        </div>
    )
}