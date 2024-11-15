import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  doctor: {
    backgroundColor: COLORS.white,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItens: "center",
    borderWidth: 1,
    borderColor: COLORS.gray4,
    marginBottom: 12,
    borderRadius: 4
  },
  icon: {
    width: 45,
    height: 45,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 3
  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
  },
}