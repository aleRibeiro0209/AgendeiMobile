import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  appointment: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.gray4
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 2
  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginBottom: 4
  },
  textBooking: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginTop: 3
  },
  booking: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2
  },
  icon: {
    width: 28,
    height: 28
  },
  container: {
    flexDirection: "row",
  },
  containerBooking: {
    flex: 1,
    gap: 5,
  },
  containerButton: {
    flex: 1,
    justifyContent: "flex-end"
  },
}