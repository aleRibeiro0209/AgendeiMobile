import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  item: {
    borderWidth: 1,
    borderColor: COLORS.gray4,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginBottom: 4,
  },
  text: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
  },
  containerButton: {
    marginTop: "auto",
    padding: 10
  }
}