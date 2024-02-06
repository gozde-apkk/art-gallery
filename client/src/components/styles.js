



const NavWrapper = { position: "absolute", top: 0, left: 0, right: 0, with: "100%", height:"100vh" ,transform : 'translateX()', transition: 'all 0.3s' };
const Header = { padding: "10px 20px", textAlign: "center", color: "white" };
const LabelContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const ShowNavWrapper = { transform: "translateX(100%)" };
const ShowNav = { transform: "translateX(0)" };
const HideNav = { transform: "translateX(-200%)" }

export const styles = {
    NavWrapper: NavWrapper,
    Header: Header,
    LabelContainer: LabelContainer,
    ShowNavWrapper: ShowNavWrapper,
    ShowNav : ShowNav,
    HideNav : HideNav
  }