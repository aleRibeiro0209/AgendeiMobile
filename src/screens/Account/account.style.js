import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: "space-between",
    padding: 50
  },
  containerLogo: {
    alignItems: "center",
  },
  logo: {
    width: 139,
    height: 31.97,
  },
  input: {
    fontSize: FONT_SIZE.md,
    backgroundColor: COLORS.gray5,
    paddingVertical: 13,
    paddingHorizontal: 14,
    borderRadius: 4,
    marginBottom: 15,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  footerText: {
    color: COLORS.gray3,
  },
  footerLink: {
    color: COLORS.blue,
  }
}