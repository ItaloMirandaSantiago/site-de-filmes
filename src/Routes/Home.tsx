import { ImageShadow } from "../components/ImageShadow"
import { Menu } from "../components/Menu"
import { PathRequests } from "../components/PathRequests"
import { Search } from "../components/Search"

export const Home = ()=>{
    return(
        <div>
            <Menu />
            <ImageShadow />
            <Search />
            <PathRequests />
        </div>
    )
}