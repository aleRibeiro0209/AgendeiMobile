import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  banner: {
    backgroundColor: COLORS.blue,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  name: {
    fontSize: FONT_SIZE.md,
    fontWeight: 700,
    color: COLORS.white,
  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.white,
  },
  icon: {
    width: 81,
    height: 81
  }
}