import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  service: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.gray4,
    flexDirection: "row"
  },
  description: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray3,
  },
  price: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.blue,
  },
  containerInfo: {
    flex: 1
  },
  containerButton: {
    flex: 0.5
  },
}