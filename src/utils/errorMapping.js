export const mapAuthCodeToMessage = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "The email address is already in use by another account.";
      case "auth/invalid-email":
        return "The email address is not valid.";
      case "auth/operation-not-allowed":
        return "Email/password accounts are not enabled.";
      case "auth/weak-password":
        return "The password is too weak.";
      case "auth/unknown":
        return "please try again later";
      case "auth/user-not-found":
        return "Please Enter A Valid Email or signup";
      case "auth/wrong-password":
        return "Incorrect Password";
      default:
        return "An unknown error occurred. Please try again.";
    }
  };