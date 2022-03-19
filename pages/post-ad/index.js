import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutTwo from "../../components/layout/LayoutTwo";
import PostAdListPage from "../../components/post-ad/PostAdListPage";

const breadcrumbData ={
    "title":"İlanlar"
}

const Index = (props) => {
    return (
        <LayoutTwo>
            <Breadcrumb breadcrumbData={breadcrumbData}/>
            <PostAdListPage/>
        </LayoutTwo>
    );
};


export default Index;
