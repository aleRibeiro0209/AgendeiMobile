import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 20
  },
  theme: {
    todayTextColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue
  },
  textHour: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 700,
    color: COLORS.gray2,
    marginTop: 20
  },
  containerHour: {
    borderTopWidth: 1,
    borderColor: COLORS.gray4,
    marginBottom: 18
  },
  containerSelect: {
    borderWidth: 1,
    borderColor: COLORS.gray4,
    borderRadius: 9
  },
  picker: {
    color: COLORS.gray3
  },
}